import { Component, Element, Host, h, State, Prop } from '@stencil/core';
import classNames from 'classnames';
const typeMap = {
  arrow: { classname: 'arrow', btncontent: ['<', '>'] },
  text: { classname: 'text', btncontent: ['上一页', '下一页'] },
  simple: { classname: 'simple', btncontent: ['', ''] },
};
@Component({
  tag: 'gls-pagination',
  styleUrl: 'gls-pagination.css',
  shadow: true,
})
export class GlsPagination {
  @Element() el: HTMLElement;
  @State() crtIndex: number = 1;
  @State() maxIndex: number = 0;
  @Prop() paginationStyle: string = 'text';
  @State() activeclassname: string = `active-${this.paginationStyle}`;
  ulClick(e) {
    this.el.shadowRoot.querySelector(`.${this.activeclassname}`).className = ``;
    e.target.className = this.activeclassname;
    this.crtIndex = Number(e.target.id);
    if (this.crtIndex == 1) {
      this.el.shadowRoot.querySelector('.btn-prev').setAttribute('disabled', 'true');
    } else {
      this.el.shadowRoot.querySelector('.btn-prev').removeAttribute('disabled');
    }
    if (this.crtIndex == this.maxIndex) {
      this.el.shadowRoot.querySelector('.btn-next').setAttribute('disabled', 'true');
    } else {
      this.el.shadowRoot.querySelector('.btn-next').removeAttribute('disabled');
    }
  }
  prevPage() {
    console.log('prevpage');
    this.el.shadowRoot.querySelector(`.${this.activeclassname}`).className = '';
    this.el.shadowRoot.querySelectorAll('li')[this.crtIndex - 2].className = this.activeclassname;
    this.crtIndex--;
    this.el.shadowRoot.querySelector('.btn-next').removeAttribute('disabled');
    if (this.crtIndex == 1) {
      this.el.shadowRoot.querySelector('.btn-prev').setAttribute('disabled', 'true');
    } else {
      this.el.shadowRoot.querySelector('.btn-prev').removeAttribute('disabled');
    }
  }
  nextPage() {
    console.log('nextpage');
    this.el.shadowRoot.querySelector(`.${this.activeclassname}`).className = '';
    this.el.shadowRoot.querySelectorAll('li')[this.crtIndex].className = this.activeclassname;
    this.crtIndex++;
    this.el.shadowRoot.querySelector('.btn-prev').removeAttribute('disabled');
    if (this.crtIndex == this.maxIndex) {
      this.el.shadowRoot.querySelector('.btn-next').setAttribute('disabled', 'true');
    } else {
      this.el.shadowRoot.querySelector('.btn-next').removeAttribute('disabled');
    }
  }
  componentDidLoad() {
    this.maxIndex = this.el.shadowRoot.querySelectorAll('li').length;
    this.el.shadowRoot.querySelector('ul').onclick = this.ulClick.bind(this);
    let btnPrevToHTMLElement = this.el.shadowRoot.querySelector('.btn-prev') as HTMLElement;
    btnPrevToHTMLElement.onclick = this.prevPage.bind(this);
    let btnNextToHTMLElement = this.el.shadowRoot.querySelector('.btn-next') as HTMLElement;
    btnNextToHTMLElement.onclick = this.nextPage.bind(this);
  }
  render() {
    return (
      <Host>
        <div class="pages">
          <button type="button" class={classNames(`btn-prev`, `btn-prev-${typeMap[this.paginationStyle]['classname']}`)} disabled>
            <span>{typeMap[this.paginationStyle]['btncontent'][0]}</span>
          </button>
          <span>
            <div class={'pagespread'}>···</div>
          </span>
          <ul class="pagenumbers">
            <li class={this.activeclassname} id="1">
              1
            </li>
            <li id="2">2</li>
            <li id="3">3</li>
            <li id="4">4</li>
            <li id="5">5</li>
            {/* <li id="6">6</li> */}
          </ul>
          <span>
            <div class={'pagespread'}>···</div>
          </span>
          <button type="button" class={classNames(`btn-next`, `btn-next-${typeMap[this.paginationStyle]['classname']}`)}>
            <span>{typeMap[this.paginationStyle]['btncontent'][1]}</span>
          </button>
        </div>
        <slot></slot>
      </Host>
    );
  }
}
