import * as process from 'process';

const parseArgs = () => {
    const args = process.argv.slice(2);
    const argPairs = args.reduce((result, value, index, array) => {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2).join(' is '));
        return result;
      }, []);

      console.log(argPairs.join(', '))
};

parseArgs();