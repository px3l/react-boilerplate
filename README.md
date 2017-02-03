# React Boilerplate

A very basic boilerplate for React apps. This is just a frontend app using a react-redux setup. It is great to use for a very clean start, or to learn the basics of React and Redux.

## Development

To build the frontend (outputs to `frontend/dist`), whilst triggering rebuilds on save:

```bash
$ yarn run watch
```

#### Serve

To serve the frontend you can use the npm module "ecstatic"

```bash
$ cd dist
$ ecstatic
```

#### Clean or Reinstall

To clean `/dist` for rebuild use

```bash
$ yarn run clean
```

To completely reinstall (delete `/node_modules` and `/dist`)

```bash
$ yarn run reinstall
```

## Basic Use

#### Button

This is a button using a simple react-redux cycle. It has a simple action, `buttonCount` which is dispatched to the reducer to increment the count.

#### Saga

TO DO

#### Tests

TO DO