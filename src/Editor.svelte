<script lang="ts">
  import loader from "@monaco-editor/loader";
  import type { editor } from "monaco-editor";
  import { onDestroy, onMount } from "svelte";
  import sample_resume from "./sample_resume";
  import { resume_schema } from "./resume.schema";
  import type { Resume } from "./resume.interface";
  export let on_json_change: (json: Resume) => void = (json: Resume) => {};
  let editor_div: HTMLDivElement;
  let editor: editor.IStandaloneCodeEditor;
  let format_editor = () => editor.getAction("editor.action.formatDocument")?.run();
  let load_json = async (json: any) => {
    let model = editor.getModel();
    if (!model) return;
    let monaco = await loader.init();
    monaco.editor.setModelLanguage(model, "json");
    editor.setValue(JSON.stringify(json, null, 2));
    format_editor();
  };
  loader.config({ paths: { vs: "./monaco/min/vs" } });
  let loadMonaco = async () => {
    let monaco = await loader.init();
    editor = monaco.editor.create(editor_div, {
      value: "",
      language: "json",
      formatOnPaste: true,
      formatOnType: true,
      theme: "vs-dark",
      tabSize: 2,
      automaticLayout: true,
    });
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: "http://json-schema.org/draft-07/schema#",
          fileMatch: ["*"],
          schema: resume_schema,
        },
      ],
      schemaValidation: "error",
    });
    editor.onDidChangeModelContent((e) => {
      try {
        let json = editor.getValue();
        let resume = JSON.parse(json);
        on_json_change(resume);
      } catch (e) {}
    });
    await load_json(sample_resume);
  };
  onMount(() => {
    loadMonaco();
  });
  onDestroy(() => {
    editor?.dispose();
  });
</script>

<div class="flex flex-col border-b p-2 border-gray-600 text-white bg-[#1e1e1e]">
  <div class="text-gray-200 text-3xl">Resume Builder</div>
  <div class="text-gray-200 text-xs italic">
    <span>Modify JSON as to create your resume. Press </span>
    <div class="inline-block border border-gray-600 rounded px-1">Ctrl</div>
    <span>+</span>
    <div class="inline-block border border-gray-600 rounded px-1">P</div>
    <span>And save your Resume</span>
  </div>
</div>
<div class="flex grow bg-[#1e1e1e]" bind:this={editor_div} />
