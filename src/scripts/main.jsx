import Swipe, {SwipeItem} from 'swipejs/react'

console.log('Start main script')
console.log('-----------------')

class HomePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      0: this.props.start,
      1: this.props.start + 1,
      2: this.props.start - 1
    }

    this.onTransactionEnd = this.onTransactionEnd.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
  }

  onTransactionEnd (index, elem) {
  }

  handleCallback (index, elem) {
    let currNum = parseInt(elem.querySelector('img').dataset.currImg)

    this.setState({
      [this.swipe.getPos()]: currNum,
      [this.getNextPos()]: currNum + 1,
      [this.getPrevPos()]: currNum - 1
    })
  }

  handleClick (event) {
  }

  getPrevPos () {
    if (this.swipe.getPos() > 0) return this.swipe.getPos() - 1
    else return 2
  }

  getNextPos () {
    if (this.swipe.getPos() < 2) return this.swipe.getPos() + 1
    else return 0
  }

  render () {
    const swipeItem0 = (
      <SwipeItem
        className={'custom-swipe-item-class'}
        onClick={this.handleClick}>
        <img src={this.props.images[this.state['0']].src} alt="" data-curr-img={this.state['0']}/>
      </SwipeItem>
    )

    const swipeItem1 = (
      <SwipeItem
        className={'custom-swipe-item-class'}
        onClick={this.handleClick}>
        <img src={this.props.images[this.state['1']].src} alt="" data-curr-img={this.state['1']}/>
      </SwipeItem>
    )

    const swipeItem2 = (
      <SwipeItem
        className={'custom-swipe-item-class'}
        onClick={this.handleClick}>
        <img src={this.props.images[this.state['2']].src} alt="" data-curr-img={this.state['2']}/>
      </SwipeItem>
    )

    return (
      <Swipe
        className='custom-swipe-container-class'
        ref={o => this.swipe = o}
        startSlide={0}
        speed={300}
        auto={0}
        draggable={true}
        continuous={true}
        autoRestart={false}
        disableScroll={false}
        stopPropagation={false}
        callback={this.handleCallback}
        transitionEnd={this.onTransactionEnd}>

        {swipeItem0}
        {swipeItem1}
        {swipeItem2}
      </Swipe>
    )
  }
}

const IMAGES = [
  {src: './img/0.jpg'},
  {src: './img/1.jpg'},
  {src: './img/2.jpg'},
  {src: './img/3.jpg'},
  {src: './img/4.jpg'},
  {src: './img/5.jpg'},
  {src: './img/6.jpg'},
  {src: './img/7.jpg'},
  {src: './img/8.jpg'},
  {src: './img/9.jpg'},
  {src: './img/10.jpg'},
  {src: './img/11.jpg'},
  {src: './img/12.jpg'},
  {src: './img/13.jpg'},
  {src: './img/14.jpg'},
  {src: './img/15.jpg'},
  {src: './img/16.jpg'},
  {src: './img/17.jpg'},
  {src: './img/18.jpg'},
  {src: './img/19.jpg'}
]

ReactDOM.render(<HomePage images={IMAGES} start={6} />, document.getElementById('root'))
