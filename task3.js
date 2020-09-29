// Задание 3
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    return new Promise((resolved, rejected) => {
        const delay = randomIntegerFromInterval(200, 500);
         setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                const args = {
                    id: transaction.id,
                    time: delay
                }
                resolved(args);
            } else {
                rejected(transaction.id);
            }
          }, delay);
    })

};

const logSuccess = (args) => {
  console.log(`Transaction ${args.id} processed in ${args.time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};


makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);