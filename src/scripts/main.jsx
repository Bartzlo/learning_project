import Swipe, {SwipeItem} from 'swipejs/react'

console.log('Start main script')
console.log('-----------------')

class HomePage extends React.Component {
  constructor (props) {
    super(props)

    const start = this.props.start
    let imgsProp = this.props.images.map((item, i) => {
      return {src: start - i <= 1 && i - start <= 1 ? item.src : ' ', bgSrc: item.src}
    })

    this.state = {imgsProp: imgsProp}

    this.onTransactionEnd = this.onTransactionEnd.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickNextBtn = this.handleClickNextBtn.bind(this)
    this.handleClickPrevBtn = this.handleClickPrevBtn.bind(this)
  }

  handleClickNextBtn () {
    this.swipe.next()
  }

  handleClickPrevBtn () {
    this.swipe.prev()
  }

  componentDidMount () {
  }

  onTransactionEnd (index, elem) {
  }

  handleCallback (index, elem) {
    let imgsProp = this.state.imgsProp
    imgsProp[index + 1].src = imgsProp[index + 1].bgSrc
    imgsProp[index - 1].src = imgsProp[index - 1].bgSrc

    this.setState({imgsProp: imgsProp})
  }

  handleClick (event) {
  }

  render () {
    const swipeItems = this.state.imgsProp.map((imgInfo, i) => {
      return (
        <SwipeItem
          className={'custom-swipe-item-class'}
          onClick={this.handleClick}
          key={i.toString()}>
          <img src={imgInfo.src} />
        </SwipeItem>
      )
    })

    console.log(swipeItems[this.props.start].SwipeImg)

    return (
      <div>
        <button className='prevBtn' onClick={this.handleClickPrevBtn}>Prev</button>
        <button className='nextBtn' onClick={this.handleClickNextBtn}>Next</button>
        <Swipe
          className='custom-swipe-container-class'
          ref={o => this.swipe = o}
          startSlide={this.props.start}
          speed={300}
          auto={0}
          draggable={true}
          continuous={false}
          autoRestart={false}
          disableScroll={false}
          stopPropagation={false}
          callback={this.handleCallback}
          transitionEnd={this.onTransactionEnd}>

          {swipeItems}
        </Swipe>
      </div>
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
