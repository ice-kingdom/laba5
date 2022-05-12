 function resolver(a, b, c){
	var obj = {};

	if(a === '')
		a = 0;
	if (b === '')
		b = 0;
	if (c === '')
		c = 0;

	if (a != 0 && b != 0 && c != 0) {
		var d = b * b - 4 * a * c;

		if (d > 0) {
			var x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
			var x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
			obj.alert = "Дискриминант больше нуля (два корня).";
			obj.x1 = x1;
			obj.x2 = x2;
			return obj;
		} else if (d == 0) {
			var x1 = -b / ( 2 * a );
			obj.alert = "Дискриминант равен нулю (один корень).";
			obj.x1 = x1;
			return obj;
		} else if (d < 0) {
			obj.alert = "Дискриминант отрицательный (комплексные корни)";
			obj.x1 = "(" + -b + " + " + "√( " + -d + " )i) / " + 2 * a;
			obj.x2 = "(" + -b + " - " + "√( " + -d + " )i) / " + 2 * a;
			return obj;
		}

	}
	else if (a == 0 && b != 0 && c != 0)
	{
		var x = -c / b;
		obj.alert = "Это линейное уравнение";
		obj.x1 = x;
		return obj;
	}
	else if (a != 0 && b == 0 && c != 0)
	{
		obj.alert = "Неполное квадратное уравнение";
		if (c < 0)
		{
			var x = -c/a;
			x = Math.sqrt(x);
			obj.x1 = x;
			return obj;
		}
		else if (c > 0)
		{
			obj.x1 = "√" + (-c/a);
			return obj;
		}
	}
	else if (a == 0 && b == 0 && c != 0)
	{
		obj.alert = "Это не уравнение";
		return obj;
	}
}