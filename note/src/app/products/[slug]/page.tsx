import { notFound } from "next/navigation";

// 다이나믹 라우팅
type Props = {
    params: {
        slug : string;
    }
}

export default function ProductPage(props: Props) {
    if(props.params.slug === 'nothing') notFound();
    return (
        <h1>
            {props.params.slug}
        </h1>
    );
}

// 미리 페이지를 만들어 놓고 싶을 떄
export function generateStaticParams() {
    const products = ['pants', 'skirt'];
    return products.map(product => ({
        slug : product
    }))
}

