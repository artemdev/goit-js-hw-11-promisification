const delay = ms => {
    return new Promise(resolved => {
        setInterval(() => {
            resolved(ms)
        }, ms);
    })
  };

const logger = time => console.log(`Resolved after ${time}ms`);
delay(2000).then(logger);

