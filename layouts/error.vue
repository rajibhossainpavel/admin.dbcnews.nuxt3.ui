<template>
  <div class="container error-container">
    <div class="row">
      <div class="col-lg-12">
        <div class="error-content">
          <h1 class="status-message">দুঃখিত!</h1>
          <h2 v-if="error.statusCode" class="status-code">
            {{ error.statusCode }}
          </h2>
          <!-- <tt v-if="error.message">{{ error.message }}</tt> -->
          <p>
            আপনি যে পাতার অনুসন্ধান করছেন সেটি খুঁজে পাওয়া যায় নি। পাতাটি হয়তো
            সরানো হয়েছে, পুনরায় নামকরণ করা হয়েছে অথবা ভুলভাবে অনুসন্ধান করেছেন।
          </p>
          <div class="mb-3 input-group">
            <input
              type="text"
              class="form-control"
              placeholder="অনুসন্ধান করুন"
              v-model="keywords"
            />
            <div class="input-group-append">
              <button class="btn input-group-text" id="basic-addon2">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <nuxt-link to="/" class="mt-2 mb-5 btn" tag="button" exact>
            মুলপাতায় ফিরে যান
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  data() {
    return {
      keywords: "",
    };
  },

  head() {
    return {
      title: this.metaTitle,
    };
  },

  //  mounted: function () {
  //    console.log(this.error)
  //     if (this.error.statusCode === 500
  //       && /^Loading chunk [0-9]+ failed/.test(this.error.message)
  //       && window.location.hash !== '#retry') {
  //       // the chunk might no longer be available due to a recent redeployment of the page
  //       // mark the page to don't trigger reload infinitely
  //       window.location.hash = '#retry'
  //       window.location.reload(true)
  //     }
  //  },

  methods: {
    async searchResults() {
      if (!this.keywords) {
        return;
      }
      // this.showSearch = false
      this.$router.push({
        name: "news",
        query: { keywords: this.keywords },
      });
    },
  },

  computed: {
    metaTitle() {
      if (this.error || this.error.length || this.error.statusCode) {
        return this.error.statusCode + " - " + this.error.message;
      }

      return "Error";
    },
  },
};
</script>

<style>
.error-container {
  padding-top: 110px;
}
.error-content {
  text-align: center !important;
}
.error-content .status-code {
  font-size: 50px !important;
  color: #de1f26;
  margin: 0;
}
.error-content .status-message {
  font-size: 45px !important;
  margin: 0;
}
.error-content p {
  font-size: 20px !important;
}
</style>
