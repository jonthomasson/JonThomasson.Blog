# JonThomasson.Blog
My personal blog

To build project, make sure to first do an npm install and an ng build

To generate the initial db schema run this at a command prompt in the root directory of the project:

```dotnet ef database update```

current list of todo's:
1. Figure out best loading/preloading strategy for modules. (ie load blog module eagerly and perhaps selective preload the home module).
    https://angular.io/guide/router
2. Create admin module with an authguard for updating blogs and moderating comments etc.
3. Paginate blog posts on posts-listing.component.
4. Finish About and Contact components.
5. Finish search function to filter posts-listing.component results.
6. Finish comments component for adding and viewing comments for posts.
7. Finish navigation widget on posts-listing.component. (ie hook up tags, archive, etc)
