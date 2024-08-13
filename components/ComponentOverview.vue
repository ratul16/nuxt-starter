<script setup>
const visible = ref(false);
const isChecked = ref(false);
const date = ref(null);
const categories = ref("");
const otp = ref(null);
</script>

<template>
  <div class="grid">
    <div class="col-12 md:col-12 sm:col-12">
      <h4 class="mt-0">Button Group</h4>
      <div class="flex flex-wrap align-items-center gap-2 mb-4">
        <Button label="Primary" @click="visible = true" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
      </div>
      <div class="flex flex-wrap align-items-center gap-2 mb-4">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warn" severity="warn" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
        <Button label="Contrast" severity="contrast" outlined />
      </div>
    </div>
    <div class="col-12 md:col-6 sm:col-12">
      <h4 class="mt-0">Message Group</h4>
      <div>
        <Message severity="success" class="mb-3">Success Message</Message>
        <Message severity="info" class="mb-3">Info Message</Message>
        <Message severity="warn" class="mb-3">Warn Message</Message>
        <Message severity="error" class="mb-3">Error Message</Message>
        <Message severity="secondary" class="mb-3">Secondary Message</Message>
        <Message severity="contrast" class="mb-3">Contrast Message</Message>
      </div>
    </div>
    <div class="col-12 md:col-6 sm:col-12 flex flex-column gap-3">
      <Card>
        <template #content>
          <div class="flex flex-column gap-3">
            <div class="flex flex-column gap-2">
              <label for="username">Username</label>
              <InputText id="username" v-model="value" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2">
              <label for="username">Email</label>
              <InputText
                id="username"
                v-model="value"
                variant="filled"
                aria-describedby="username-help"
              />
            </div>
            <div class="flex flex-column gap-2">
              <label for="username">Date of Birth</label>
              <DatePicker v-model="date" />
            </div>
            <div class="flex flex-column gap-2">
              <label for="username">Enter Pin</label>
              <InputOtp v-model="otp" />
            </div>
            <div class="card">
              <label for="username">Radio Button</label>
              <div class="flex flex-wrap gap-4 mt-2">
                <div class="flex items-center">
                  <RadioButton
                    v-model="categories"
                    inputId="ingredient1"
                    name="pizza"
                    value="Cheese"
                  />
                  <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="categories"
                    inputId="ingredient2"
                    name="pizza"
                    value="Mushroom"
                  />
                  <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="categories"
                    inputId="ingredient3"
                    name="pizza"
                    value="Pepper"
                  />
                  <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex items-center">
                  <RadioButton
                    v-model="categories"
                    inputId="ingredient4"
                    name="pizza"
                    value="Onion"
                  />
                  <label for="ingredient4" class="ml-2">Onion</label>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-12 sm:col-12">
      <h4>Accordion</h4>
      <Accordion value="0" class="border-round-md overflow-hidden">
        <AccordionPanel value="0">
          <AccordionHeader>Header I</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Header II</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
              modi.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Header III</AccordionHeader>
          <AccordionContent>
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <h4>Tabs Panel</h4>
      <Tabs value="0" class="border-round-md overflow-hidden">
        <TabList>
          <Tab value="0">Header I</Tab>
          <Tab value="1">Header II</Tab>
          <Tab value="2">Header III</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
              modi.
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    <div class="col-12 md:col-4 sm:col-12" v-for="(x, i) in [1, 2, 3]" :key="i">
      <Card class="overflow-hidden shadow-2">
        <template #header>
          <img
            class="w-full"
            alt="user header"
            src="https://images.unsplash.com/photo-1549300461-11c5b94e8855"
          />
        </template>
        <template #title>Advanced Card {{ x }}</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </small>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-2">
            <Button
              label="Open Modal"
              severity="secondary"
              outlined
              class="w-full"
              @click="visible = true"
            />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
    <Dialog
      v-model:visible="visible"
      maximizable
      modal
      header="Header"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped></style>
