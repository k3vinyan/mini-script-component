class Navbar {
    constructor() {
        this.links = {}
        this.el = null;
    }
    
    addLink(key, value) {
        this._createKeyObj(key);
        this.links[key]['link'] = value;
    }


    addLinks(obj) {
        for(let key in obj) {
            this.addLink(key, obj[key])
        }
    }

    addId(key, idName) {
       this.links[key]['id'] = idName;
    }

    addClass(key, className) {
        this.links[key]['classNames'].push(className)
    }

   

    render() {
        const ul = document.createElement('ul');

        console.log(this.links)

        for(let link in this.links) {
            const li = document.createElement('li');
            li.innerHTML = link;
    
            if(this._classExist(link)) {
               const arr = this.links[link]['classNames'];
               
               for(let i = 0; i < arr.length; i++) {
                   li.classList.add(arr[i])
               }
            }

            if(this._idExist(this.links[link])) {
                li.id = arr[i].id
            }


           
            ul.appendChild(li);
        }

        this.el = ul;

        return ul;
        console.log(ul)
    }

    _keyExist(key) {
        return (key in this.links)
    }

    _classExist(key) {
        const arr = this.links[key]['classNames'];

        if(arr.length === undefined || arr.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    _idExist(obj) {
        return (obj.id != null || obj.id != undefined) ? true : false;
    }

    _addClassToElement(el, arr) {
        for(let i = 0; i < arr.length; i++) {
            el.classList.add(arr[i])
        }
    }

    _createKeyObj(key) {
        if(this._keyExist(key)) {
            console.error(key, "already existed")
        } else {
            const obj = {
                classNames: [],
                id: null,
                name: key,
                link: null
            }

            this.links[key] = obj;
        }
    }
}

export default Navbar;