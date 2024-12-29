<script lang="ts">
  import { Tabs } from '@skeletonlabs/skeleton-svelte';
  import NativeAudio from './NativeAudio.svelte';
  import Pfft from './PFFT.svelte';
  import PulseFft from './PulseFFT.svelte';

  let tab = $state<'native' | 'pffft' | 'pulsefft'>('pffft');
</script>

<Tabs bind:value={tab} base="mt-4">
  {#snippet list()}
    <Tabs.Control value={'native'} labelClasses="rounded-md">Native</Tabs.Control>
    <Tabs.Control value={'pffft'} labelClasses="rounded-md">PFFFT</Tabs.Control>
    <Tabs.Control value={'pulsefft'} labelClasses="rounded-md">PulseFFT</Tabs.Control>
  {/snippet}
  {#snippet content()}
    <Tabs.Panel value="native"><NativeAudio /></Tabs.Panel>
    <Tabs.Panel value="pffft"><Pfft /></Tabs.Panel>
    <Tabs.Panel value="pulsefft"><PulseFft /></Tabs.Panel>
  {/snippet}
</Tabs>
