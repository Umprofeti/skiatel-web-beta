import React from "react";
import Image from "next/image";
import { Amiko } from "next/font/google";


const Gowun = Amiko({weight: ["600", "400", "700"], style:"normal", subsets: ["latin"]})

const RichText = ({node}) => {
    if (!node) return null;

  const renderChildren = (children) => {
    return children.map((child, index) => <RichText key={index} node={child} />);
  };

  switch (node.type) {
    case 'root':
      return <div className="flex flex-col gap-3">{renderChildren(node.children)}</div>;
    case 'heading':
      const HeadingTag = node.tag == 'h1' ? 'h2':  node.tag ;
      return <HeadingTag style={{ textAlign: node.format}} className={`${Gowun.className} text-secondary font-bold text-3xl`}>{renderChildren(node.children)}</HeadingTag>;
    case 'paragraph':
      return <p className={`${Gowun.className} text-secondary`} style={{ textAlign: node.format }}>{renderChildren(node.children)}</p>;
    case 'text':
      return <>{node.text}</>;
    case 'upload':
        return <Image className="w-full" src={node.value.url} height={node.value.height} width={node.value.width} alt={node.value.alt}/>
    case 'list':
        switch (node.listType) {
            case 'number':
                return <ol className="list-decimal">{renderChildren(node.children)}</ol>;
            case 'bullet':
                return <ul className="list-disc">{renderChildren(node.children)}</ul>;
            default:
                return null;
        }
    case 'listitem':
        return <li className={`${Gowun.className} text-secondary`}>{renderChildren(node.children)}</li>;
    default:
      return null;
  }
}

export default RichText