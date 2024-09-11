// This forces dynamic rendering if needed

const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      if (data.success) {
        return data.result;
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  export default async function Page() {
    const products = await getProducts();
    console.log(products);
  
    return (
      <div >
        <h1>Product List</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Company</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {
            products.map((item)=>{
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.color}</td>
                    <td>{item.company}</td>
                    <td>{item.category}</td>
                </tr>
            })

              }
          </tbody>
        </table>
      </div>
    );
  }