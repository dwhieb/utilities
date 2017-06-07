export default asyncFunc => done => asyncFunc().then(done).catch(done.fail);
