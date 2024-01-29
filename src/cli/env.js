import * as process from 'process';

const parseEnv = () => {
    const envs = process.env;
    let rssEnvs = [];
    Object.keys(envs).forEach(key => {
        if (key.startsWith('RSS_')) {
            rssEnvs = [...rssEnvs, `${key}=${envs[key]}`];
        }
    });

    console.log(rssEnvs.join('; '))
};

parseEnv();