import { Block } from "payload/types";

const PortfolioReference: Block = {
    slug: 'portfolioReference',
    interfaceName: 'PortfolioReference',
    fields: [
        {
            type: 'text',
            name: 'Title',
            required: true
        },
    ]
}

export default PortfolioReference;