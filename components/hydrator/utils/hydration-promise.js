export function makeHydrationPromise(component) {
  let hydrate = () => component;
  const hydrationPromise = new Promise((resolve) => {
    hydrate = () => resolve(component);
  });

  return {
    hydrate,
    hydrationPromise,
  };
}
