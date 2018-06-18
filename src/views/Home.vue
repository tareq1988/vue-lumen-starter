<template>
  <div class="home">
    <div class="jumbotron text-center">
      <div class="container">
        <h1>Hello, world!</h1>

        <p class="lead">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>

        <p><a class="btn btn-primary" href="#" role="button">Learn more</a></p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="less">
.jumbotron {
  margin-top: -1.5rem!important;
  background-color: #f9f9f9;

  .container {
    max-width: 40rem;
  }
}
</style>
