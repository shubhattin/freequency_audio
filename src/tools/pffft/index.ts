let wasm: WebAssembly.WebAssemblyInstantiatedSource = null!;

export const get_pffft_instance = async () => {
  const url = new URL('/src/tools/pffft/pffft.wasm', import.meta.url);

  // write te above using async/await
  if (!wasm) {
    console.log('Loading wasm');
    const wasm_obj = await fetch(url).then((x) => x.arrayBuffer());
    wasm = await WebAssembly.instantiate(wasm_obj);
    console.log('Loaded wasm', wasm);
  }
  return wasm;
};
