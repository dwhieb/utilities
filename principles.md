# Principles of Coding

* **single responsibility:** one function, one responsibility

* **command-query separation:** If a function is a query, do not alter the state, but return a value. If a function does something, alter the state and do not return a value.

* **loose coupling:** tight coupling might be a sign that you need a class instead

  - **principle of least knowledge (Law of Demeter):** a unit of code should require only limited knowledge of other code units

  - **interface segregation principle:** no client should be forced to depend on methods it does not use

    - if each user of your object only uses some of its methods consider breaking up your object into several more focused methods

    - Boolean flags passed / switch controls are a good warning sign

* **high cohesion:** functions and methods in a code block should make sense together

* **open/closed principle:** software entities should be open for extension but closed for modification

## Tips

* Avoid "clever" code - keep things clear and simple

## OOP vs. Data Structures

* **OOP:** OOP objects should expose _behavior_ and limit access to data.

* **data structures:** Data structures should expose _data_ and contain no behavior.
