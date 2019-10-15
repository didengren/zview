import { storiesOf } from "@storybook/vue";
import ZSearch from "./search.vue";
import markdown from "./search.md";

storiesOf("Search", module).add(
  "介绍",
  () => ({
    components: { ZSearch },
    template: `<div>
<z-search type="primary">Primary</z-search>
<z-search disabled>Disabled</z-search>
<z-search round>Round</z-search>
</div>`
  }),
  {
    notes: { markdown }
  }
);
