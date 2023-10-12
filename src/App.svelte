<script lang="ts">
  import Editor from "./Editor.svelte";
  import sample_resume from "./sample_resume";
  let r = sample_resume;
  import type { Resume } from "./resume.interface";
  let on_json_change = (resume: Resume): void => {
    r = resume;
  };
</script>

<svelte:head>
  <title>resume-{r.name.replaceAll(" ", "_").toLocaleLowerCase()}</title>
</svelte:head>
<div class="fixed flex flex-col border-r inset-0 right-[210mm] print:hidden">
  <Editor {on_json_change} />
</div>
<!-- w-[210mm] h-[296mm] -->
<div class="print:block flex flex-col pr-4 absolute right-0 w-[210mm]">
  <div class="flex flex-col p-2">
    <h3 class="text-3xl font-medium max-w-[90%] overflow-hidden overflow-ellipsis whitespace-nowrap" title={r.name}>{r.name}</h3>
    <p class="font-normal text-blue-500">{r.jobtitle}</p>
    <div class="flex gap-3">
      <a class="text-sm font-normal" href="tel:{r.phone}"><i class="fas fa-phone" /> {r.phone}</a>
      <a class="text-sm font-normal" href="mailto:{r.email}"><i class="fas fa-envelope" /> {r.email}</a>
      <p class="text-sm font-normal"><i class="fas fa-location" /> {r.location}</p>
      <div class="flex gap-1 mr-2">
        <i class="fas fa-globe" />
        <a class="text-sm font-normal" href={r.website}>{r.website}</a>
      </div>
    </div>
    <div class="flex gap-3">
      {#each r?.social as s}
        <div class="flex gap-1 mr-1">
          <i class="fab fa-{s.network}" />
          <a class="text-sm font-normal" href={s.url}>{s.username}</a>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex">
    <div class="basis-[60%] p-2">
      <div class="mb-3">
        <div class="relative font-medium border-b-4 border-blue-500">Summary</div>
        <ul class="list-disc text-xs pl-4 py-1.5">
          {#each r?.summary as summary}
            <li>{summary}</li>
          {/each}
        </ul>
      </div>
      <div class="mb-3">
        <div class="relative font-medium border-b-4 border-blue-500">Experience</div>
        {#each r?.work as w}
          <div class="break-inside-avoid py-2">
            <p class="text-lg font-medium text-blue-600">{w.position}</p>
            <div class="flex justify-between items-center">
              <p class="text-xs font-normal">{w.company}</p>
              <p class="text-xs italic">{w.daterange}</p>
            </div>
            <ul class="list-disc text-xs pl-4 pt-0.5">
              {#each w.summary as s}
                <li>{s}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      {#if r.showfact}
        <div class="mb-3 text-xs">
          <div class="relative border-b font-medium border-blue-500">Additional Fact</div>
          <p class="text-xs pt-1">I don't use windows so no Microsoft Word. So I created my own resume builder using Svelte and TailwindCSS.</p>
          <i class="fab fa-github" />
          <a class="text-blue-500" href="https://github.com/sanjeevprasad/resume-builder" target="_blank">https://github.com/sanjeevprasad/resume-builder</a>
        </div>
      {/if}
    </div>
    <!-- Right Part -->
    <div class="basis-[40%] p-2">
      <div class="relative font-medium border-b-4 border-blue-500">Objective</div>
      <div class="text-xs pt-1.5 pb-3">{r.objective}</div>
      {#each r?.skillscategories as category}
        <div class="break-inside-avoid py-2">
          <div class="relative font-medium border-b-4 border-blue-500">{category.name}</div>
          <div class="flex items-center flex-wrap gap-2 py-1">
            {#each category.skills as skill}
              <div class="text-sm font-medium border-b-2 border-gray-300">{skill}</div>
            {/each}
          </div>
        </div>
      {/each}
      {#if r?.education?.length > 0}
        <div class="break-inside-avoid py-2">
          <div class="relative font-medium border-b-4 border-blue-500">Education</div>
          {#each r?.education as e}
            <div class="py-2">
              <p class="text font-medium">{e.institution}</p>
              <div class="flex justify-between items-center">
                <div class="flex gap-1">
                  <div class="text-sm">{e.degree}</div>
                  <div class="text-xs pt-0.5">{e.course}</div>
                </div>
                <p class="text-xs italic">{e.daterange}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
