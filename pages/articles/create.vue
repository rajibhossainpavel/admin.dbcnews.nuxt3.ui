<template>
  <div class="">
    <XBreadcrumb
      leading="Articles"
      trialing="New Articles"
      :href="{ name: 'articles-create' }"
      breadcrumb="Articles / list"
    />
    <form action="">
      <div class="grid grid-cols-12 gap-6 px-2 mt-8 sm:px-4 lg:px-8">
        <div class="col-span-12 2md:col-span-8">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Title</XFormLabel>
                <XFormInput placeholder="Title" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Teaser</XFormLabel>
                <XFormInput placeholder="Title" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Title</XFormLabel>
                <XFormInput placeholder="Title" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
              <div class="w-full px-2 py-4 md:w-6/12">
                <XFormLabel>Title</XFormLabel>
                <XFormInput placeholder="Title" type="text" />
                <XFormInputError>The title field is required</XFormInputError>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <XFormLabel>Content</XFormLabel>
              <XFormTextArea placeholder="Content" />
              <XFormInputError>The title field is required</XFormInputError>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Categories</XFormLabel>

                  <div
                    class="flex flex-wrap p-2 my-3 border rounded-md"
                    v-for="n in 10"
                    :key="n"
                  >
                    <div class="flex items-center">
                      <XFormCheckbox />
                      <span class="font-semibold text-blue-600">
                        cagegory name
                      </span>
                    </div>

                    <div class="flex items-center" v-for="m in 10" :key="m">
                      <XFormCheckbox /> Child name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Topics</XFormLabel>
                  <div class="flex flex-wrap p-1">
                    <div
                      class="relative flex items-start"
                      v-for="n in 10"
                      :key="n"
                    >
                      <div class="flex items-center">
                        <XFormCheckbox />
                        Topic name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- aside  -->
        <div class="col-span-12 2md:col-span-4">
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="w-full px-2 py-4">
              <XFormLabel>Status</XFormLabel>
              <XFormSelect>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </XFormSelect>
            </div>
          </div>
          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <XFormLabel>Make Aeticle</XFormLabel>
                  <div class="flex flex-wrap p-1 -pl-2">
                    <div class="relative flex items-start mt-2">
                      <div class="flex items-center">
                        <XFormCheckbox />
                        Active
                      </div>
                    </div>
                    <div class="relative flex items-start mt-2">
                      <div class="flex items-center">
                        <XFormCheckbox />
                        Highlighted
                      </div>
                    </div>
                    <div class="relative flex items-start mt-2">
                      <div class="flex items-center">
                        <XFormCheckbox />
                        Pinned
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 mb-3 bg-white border rounded-md shadow-sm">
            <div class="flex flex-wrap">
              <div class="w-full px-2">
                <div class="mt-1">
                  <img src="" alt="img" class="" />
                  <button class="mt-3 text-blue-600 underline"></button>
                  <div
                    class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md "
                  >
                    <div class="space-y-1 text-center">
                      <img src="@/assets/icons/image.svg" alt="svg" />
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer  hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 px-8">
        <button
          type="button"
          class="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-center text-white border border-transparent rounded-md shadow-sm  text-bases bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>