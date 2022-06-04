class GalleryApi{static URL="https://jsonplaceholder.typicode.com";static request(t="",e="GET",n){const r=""+this.URL+t;return fetch(r,{method:e,headers:{"Content-type":"application/json; charset=UTF-8"},body:n?JSON.stringify(n):void 0}).then(t=>{if(t.ok)return t.json();throw new Error("API reguest error "+r)})}static getAlbums(){return this.request("/albums").catch(t=>{throw new Error("Can not fetch album list.")})}static getPhotos(t){return this.request("/photos?albumId="+t).catch(t=>{throw new Error("Can not fetch album photos.")})}}const SELECTOR=Object.freeze({NAV_LIST:"#navList",PHOTO_LIST:"#photoList",NAV_TEMPLATE:"#navItemTemplate",PHOTO_TEMPLATE:"#photoItemTemplate",NAV_ITEM:".navigation-item"}),navListEl=document.querySelector(SELECTOR.NAV_LIST),photoListEl=document.querySelector(SELECTOR.PHOTO_LIST),navItemTemplate=document.querySelector(SELECTOR.NAV_TEMPLATE).innerHTML,photoItemTemplate=document.querySelector(SELECTOR.PHOTO_TEMPLATE).innerHTML;function init(){GalleryApi.getAlbums().then(t=>{var e=getFirstAlbumId(t);renderNavigation(t),e&&renderPhotolistByAlbumId(e)}).catch(handleError)}function onNavigationListClick(t){t.preventDefault();t=getNavItemElement(t.target);t&&renderPhotolistByAlbumId(t.dataset.id)}function renderNavigation(t){t=t.map(getNavHTML).join("");navListEl.innerHTML=t}function getNavHTML(t){return navItemTemplate.replace("{{id}}",t.id).replace("{{title}}",t.title)}function getNavItemElement(t){return t.closest(SELECTOR.NAV_ITEM)}function renderPhotolistByAlbumId(t){GalleryApi.getPhotos(t).then(t=>{t=t.map(getPhotoHTML).join("");photoListEl.innerHTML=t}).catch(handleError)}function getPhotoHTML(t){return photoItemTemplate.replace("{{src}}",t.thumbnailUrl)}function getFirstAlbumId(t){return t?.[0]?.id}function handleError(t){alert(t.message)}navListEl.addEventListener("click",onNavigationListClick),init();