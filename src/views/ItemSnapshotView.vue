<template>
    <div class="snapshot">
      <h1>This is the item snapshot page</h1>
        <nav>
            <RouterLink to="/snapshot">Hour Overview</RouterLink>
            <RouterLink to="/details">Item Details</RouterLink>
        </nav>
    </div>
    <RouterView/>

  </template>
  
  <style>
  @media (min-width: 1024px) {

    nav {
        text-align: center;
        margin-left: -1rem;
        font-size: 1rem;
        padding: 1rem 0;
        margin-top: 1rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }  
}
  </style>