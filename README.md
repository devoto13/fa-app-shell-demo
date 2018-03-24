# FontAwesome 5 icon as a application spinner

This uses app shell feature of Angular CLI to display FontAwesome 5 icon as a spinner while bootstraping an application.

### Background

I didn't find a good documentation on this feature to link here, so I'll write a short background information here. 

The idea of app shell is very simple. It uses `@angular/platform-server` package to render one of the routes as a string (same as you would do for server side rendering), but instead of doing it on the server for every request it does it once at the build time and replaces content of the `index.html` with the rendered app shell route. This approach allows to use all the features of Angular to render initial application state, but does not require any special server to serve the application.

### Issue

As it turns out `@angular/platform-server` only understands CSS included in the `@Component({ styleUrls: [ ... ] })` and other standard means, but does not understand if they are loaded dynamically by custom JS (as FontAwesome library currently does). As a result the rendered app shell route does not include FontAwesome CSS on load. Which leads to the problem described here: https://github.com/FortAwesome/angular-fontawesome/issues/18.

### Reproduction steps

1. `npm install` - install dependencies
2. `npm run server` - build application with app shell and start server
3. Load application in the browser. Now you should see dashboard page almost right away.
4. To reproduce the issue disable JavaScript (spinner should be visible and spinning with pure SVG + CSS without any JS executed) and reload the page.

Actual behavior: Spinner icon is not spinning and is taking whole screen.
Desired behavior: Spinner icons is spinning, centered and is 32px high.

### Workaround

Uncomment FontAwesome CSS in the `src/styles.css` and restart `npm run server`. This confirms that the issue is because of missing FontAwesome CSS.

### Proper solution

I think `angular-fontawesome` should include CSS by utilizing `@Component({ styleUrls: [ ... ] })` for `FaIcon` component instead of inserting it dynamically. This way it will work within Angular application shell and also Angular server side rendering (also known as Universal), because it utilizes `@angular/platform-server` under the hood as well. 
