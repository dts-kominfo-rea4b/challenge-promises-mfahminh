const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) =>{
  try {
    const getPromiseTheaterIXX = await promiseTheaterIXX();
    const getPromiseTheaterVGC = await promiseTheaterVGC();
    
    const mergedTheater = getPromiseTheaterIXX.concat(getPromiseTheaterVGC);
    let hasil = 0;
    Object.values(mergedTheater).forEach(val => {
    
      const result = [val.hasil].filter(i => i === (emosi));
      const count = (result).length;
      hasil += count ? 1 : 0;
    });

    console.log(hasil);

  }catch (err) {
    console.log(err);
  }
};

promiseOutput('marah');
//promiseOutput('tidak marah');

module.exports = {
  promiseOutput,
};
