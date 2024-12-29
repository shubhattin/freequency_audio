import pffft_wasm from './pffft.wasm?init';

export const get_pffft_instance = async () => {
  const instance = await pffft_wasm();
  return instance.exports;
};
