import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("e08ab1ab-17d4-4f6c-b00f-95ae7a4429a6");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feature Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Home