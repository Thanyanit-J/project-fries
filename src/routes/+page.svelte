<script lang="js">
  export let data

  console.log(data)
</script>

<ul>
  {#each data.result as { location, menu, id, price, amount }}
    <li>
      {location}
      {menu}
      {id}
      {price}
      {amount}
    </li>
  {/each}
</ul>
