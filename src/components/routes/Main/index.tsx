import { Component } from 'react';

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: number;
  images: string[];
}

interface IMainProps {
  data: IProduct | null;
}

export default class Main extends Component<unknown, IMainProps> {
  constructor(props: unknown) {
    super(props);
    this.state = { data: null };
  }

  render() {
    return <div>{`${this.state.data?.brand}`}</div>;
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    await fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }
}
