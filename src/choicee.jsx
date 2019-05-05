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
      <Image src='common/ac2.jpg'>
      
        <Button src={'common/18.png'} position={[500, 100]} onClick={() => this.jumpTo('/story/2')} onTap={() => this.jumpTo('/story/2')}/>
        <Button src={'common/20.png'} position={[500, 300]} onClick={() => this.jumpTo('/story/2')} onTap={() => this.jumpTo('/story/2')}/>
        <Button src={'common/22.png'} position={[500, 500]} onClick={() => this.jumpTo('/story/2')} onTap={() => this.jumpTo('/story/2')}/>
        { this.props.children }
      </Image>
    );
  }
}
