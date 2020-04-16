import append_class from '../../class/append_class.js';

export default{
	data() {
		return {
			append_obj: this.get_append_class(),
		}
	},
	methods: {
		get_append_class(){
			return new append_class(this)
		},
	},
}