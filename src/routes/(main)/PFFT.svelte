<script lang="ts">
  import { get_pffft_instance } from '~/tools/pffft';
  import { scale, slide } from 'svelte/transition';

  let frequency = $state(0);
  let is_listening = $state(false);
  let fft_size = $state(2048);
  let pffft_instance: any;

  async function startFrequencyDetection() {
    if (is_listening) return; // Prevent multiple calls
    is_listening = true;

    pffft_instance = await get_pffft_instance();
  }

  function stopFrequencyDetection() {
    is_listening = false;
    frequency = 0;
  }
</script>

<div class="mt-4 space-x-6">
  <button
    class="btn rounded-md bg-green-600 px-2 py-1 text-lg font-bold text-white dark:bg-green-700"
    onclick={startFrequencyDetection}
    disabled={is_listening}
  >
    Start
  </button>
  <button
    class="btn rounded-md bg-red-600 px-2 py-1 text-lg font-bold text-white dark:bg-red-700"
    onclick={stopFrequencyDetection}
    disabled={!is_listening}
  >
    Stop
  </button>
</div>
<label class="mt-3 block">
  <span class="label-text">FFT Size</span>
  <select bind:value={fft_size} class="select w-32 rounded-md">
    {#each Array.from({ length: 8 }).map((_, i) => Math.pow(2, i + 5)) as size}
      <option value={size}>{size}</option>
    {/each}
  </select>
</label>
{#if is_listening}
  <div in:scale out:slide class="mt-4 text-xl font-bold">
    <div class="font-semibold">
      Detected Frequency: <span class="font-bold text-primary-500 dark:text-primary-400"
        >{frequency} Hz</span
      >
    </div>
  </div>
{/if}
