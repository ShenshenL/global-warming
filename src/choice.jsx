import { React, Component, components, ui } from 'avg-core';

const { Image } = components;
const { Button } = ui;

export default class choice extends Component {
  static contextTypes = {
    router: React.PropTypes.any
  }
  static propTypes = {
    children: React.PropTypes.any
  }
  jumpTo(path) {
    this.context.router.push(path);
  }
  render() {
    return (
      <Image src='fg/lis2.jpeg'>
      
        <Button src={'common/dream2.png'} position={[500, 100]} onClick={() => this.jumpTo('/story/3')} onTap={() => this.jumpTo('/story/3')}/>
        <Button src={'common/god.png'} position={[500, 300]} onClick={() => this.jumpTo('/story/3')} onTap={() => this.jumpTo('/story/3')}/>
        <Button src={'common/don.png'} position={[500, 500]} onClick={() => this.jumpTo('/story/3')} onTap={() => this.jumpTo('/story/3')}/>
        { this.props.children }
      </Image>
    );
  }
}
