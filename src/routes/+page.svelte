<script lang="js">
  export let data;

  /**
   * @type {number[]}
   */
  let price = [39, 69, 79, 89, 158];
  const sizeOrder = ['S', 'M', 'L', 'XL', 'Party'];
  const awards = ["🥇", "🥈", "🥉"];
  console.log(data.result);

  data.result.forEach((item) => {
    item.price = price[sizeOrder.indexOf(item.size)]
  });

  // Calculate value
  data.result.forEach((item) => {
    item.value = item.avg_amount / item.price;
  });

  // // Sort items based on value in descending order
  data.result.sort((a, b) => b.value - a.value);

  // // Assign awards based on ranking
  data.result.forEach((/** @type {{ award: string; }} */ item, /** @type {number} */ index) => {
    if (index < awards.length) {
      item.award = awards[index];
    }
    else {
      item.award = "";
    }
  });

  // Sort item based on the size
  data.result.sort((/** @type {{ size: string; }} */ a, /** @type {{ size: string; }} */ b) => {
    const sizeA = sizeOrder.indexOf(a.size);
    const sizeB = sizeOrder.indexOf(b.size);
    return sizeA - sizeB;
  });
  
  $: item_awards = data.result.map((item) => item.award);
  console.log(item_awards);
</script>

<style>
  :global(body) {
    font-family: 'Kanit', sans-serif;
    font-size: 64px;
  }
  input {
    font-size: 64px;
    text-align: center;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
  .fries {
    max-height: 100%;
    max-width: 100%;
    z-index: -1;
    animation: spin 02s linear infinite;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-50%, -50%);
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
  table {
    z-index: 1;
    margin: auto;
    animation: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(180, 180, 180, 0.5);
    border-spacing: 30px 0;
  }
  @keyframes spin {
   0% {
      transform: rotate(0deg);
   }
   50% {
      transform: rotate(150deg);}
   90% {
      transform: rotate(270deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet">
<div class='fries'>
  <img src="IMG_1097.JPG" alt="french-fries" />
</div>
<table style="">
  <tr>
    <th>Size</th>
    <th>Amount</th>
    <th>Price</th>
    <th>Value</th>
    <th></th>
  </tr>
  {#each data.result as {size, avg_amount, price, award},i}
    <tr>
      <td>{size}</td>
      <td>{avg_amount}</td>
      <td><input type="number" bind:value={price} /></td>
      <td>{avg_amount / price}</td>
      <td>{item_awards[i]}</td>
    </tr>
  {/each}
</table>