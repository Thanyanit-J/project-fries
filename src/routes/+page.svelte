<script lang="js">
  export let data

  console.log(data)
</script>

<!-- Table -->
<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Menu</th>
      <th>Price</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {#each data.result as { location, menu, id, price, amount }}
      <tr>
        <td>{location}</td>
        <td>{menu}</td>
        <td>{price}</td>
        <td>{amount}</td>
      </tr>
    {/each}
  </tbody>
</table>
