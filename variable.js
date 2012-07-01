
function is_empty(obj){
	if (obj instanceof Array) {
		return h.length === 0;
	} else if (obj instanceof Object) {
		for (var i in obj) {
			return false;
		}
		return true;
	} else {
		return !obj;
	}
}

function is_scalar(obj) {
	return (/string|number|boolean/).test(typeof obj);
}
