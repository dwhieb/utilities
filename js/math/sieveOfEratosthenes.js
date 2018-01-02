/**
 * A generator that infinitely returns prime numbers
 */
export default function* generatePrimes() {

  const nonPrimes = new Map;

  let num = 2;

  const checkPrimeFactor = primeFactor => {
    const nextMultiple = primeFactor + num;
    if (nonPrimes.has(nextMultiple)) nonPrimes.get(nextMultiple).add(primeFactor);
    else nonPrimes.set(nextMultiple, new Set([primeFactor]));
  };

  while (true) {

    if (nonPrimes.has(num)) {
      const primeFactors = nonPrimes.get(num);
      primeFactors.forEach(checkPrimeFactor);
      nonPrimes.delete(num);
    } else {
      yield num;
      nonPrimes.set(num ** 2, new Set([num]));
    }

    num++;

  }

}
