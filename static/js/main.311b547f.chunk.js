(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1K2DN",SearchForm:"Searchbar_SearchForm__oR6Lk",SearchFormButton:"Searchbar_SearchFormButton__2lAW7",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2UmbY",SearchFormInput:"Searchbar_SearchFormInput__96Raz"}},,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__A68J8",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3hrSB"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__2od0E",Modal:"Modal_Modal__112Ov"}},,,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2rYl3"}},function(e,t,a){e.exports={Button:"Button_Button__3TSd7"}},function(e,t,a){e.exports={App:"App_App__3_Ply"}},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=a(10),i=a(1),s=a(2),u=a(4),m=a(3),h=a(5),d=a(6),p=a.n(d),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a.handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.search),a.setState({search:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm},r.a.createElement("button",{type:"submit",className:p.a.SearchFormButton},r.a.createElement("span",{className:p.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search...",value:this.state.search,name:"search",onChange:this.handleChange})))}}]),t}(n.Component),f=a(8),b=a.n(f),I=function(e){var t=e.image,a=e.openModal,n=t.webformatURL,o=t.tags;return r.a.createElement("li",{id:t.id,onClick:a,className:b.a.ImageGalleryItem},r.a.createElement("img",{src:n,alt:o,className:b.a.ImageGalleryItemImage}))},y=a(12),S=a.n(y),v=function(e){var t=e.images,a=e.openModal;return r.a.createElement("ul",{className:S.a.ImageGallery},t.map((function(e){return r.a.createElement(I,{openModal:a,key:e.id,image:e})})))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=20300449-ccc28e6e1b766fb7038aab942&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),2e3)}))})).then((function(e){return e.json()})).then((function(e){return e.hits}))},E=a(13),O=a.n(E),k=function(e){var t=e.fetchImages;return r.a.createElement("button",{type:"button",className:O.a.Button,onClick:t},"Load more...")},j=function(){return r.a.createElement("div",null,"Loading...")},w=a(9),M=a.n(w),N=document.querySelector("#modal-root"),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){console.log(e),"Escape"===e.code&&a.props.onClose()},a.handleBackdropClick=function(e){a.backdropRef.current&&e.target!==a.backdropRef.current||a.props.onClose()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(r.a.createElement("div",{className:M.a.Overlay,ref:this.backdropRef,onClick:this.props.onClose,role:"presentation"},r.a.createElement("div",{className:M.a.Modal},e)),N)}}]),t}(n.Component),B=a(14),L=a.n(B),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],pageNumber:1,search:"",error:"",isLoading:!1,isModalOpen:!1,largeImageId:null,largeImage:[]},a.onSearch=function(e){a.setState({search:e,images:[],pageNumber:1})},a.fetchImagesWithScroll=function(){a.fetchImages(!0)},a.fetchImages=function(e){a.setState({isLoading:!0});var t=a.state,n=t.search,r=t.pageNumber;_(n,r).then((function(e){return a.setState((function(t){return{images:[].concat(Object(l.a)(t.images),Object(l.a)(e)),pageNumber:t.pageNumber+1}})),e[0]})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})})).then((function(t){if(e){var a=t.id,n=document.getElementById(a).getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:n,behavior:"smooth"})}}))},a.findPic=function(){return a.state.images.find((function(e){return e.id===a.state.largeImageId}))},a.openModal=function(e){a.setState({isModalOpen:!0,largeImageId:Number(e.currentTarget.id)})},a.closeModal=function(){return a.setState({isModalOpen:!1})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchImages(!1)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.images,n=e.isModalOpen,o=e.largeImageId;return r.a.createElement("div",{className:L.a.App},r.a.createElement(g,{onSubmit:this.onSearch}),r.a.createElement(v,{openModal:this.openModal,images:a}),t&&r.a.createElement(j,null),a.length>0&&r.a.createElement(k,{fetchImages:this.fetchImagesWithScroll}),n&&r.a.createElement(C,{largeImageId:o,onClose:this.closeModal},r.a.createElement("img",{src:this.findPic().largeImageURL,alt:this.findPic().tags})))}}]),t}(n.Component);F.defaultProps={};a(20);c.a.render(r.a.createElement(F,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.311b547f.chunk.js.map