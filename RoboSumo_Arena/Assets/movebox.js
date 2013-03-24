//var moveSpeed = 12.0;
//var turnSpeed = 180.0;

var turn : boolean = false;
var vel : boolean = false;
function Update()
{
	button = false;
	if (Input.GetKey (KeyCode.UpArrow))
	{
		rigidbody.AddRelativeForce(0, 0, 5);
		vel = true;
		
		//transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
	if (Input.GetKey (KeyCode.DownArrow))
	{
		rigidbody.AddRelativeForce(0, 0, -5);
		vel = true;
	
		//transform.position += -transform.forward * moveSpeed * Time.deltaTime;
	}
	if (Input.GetKey (KeyCode.LeftArrow))
	{
		rigidbody.AddTorque(0, -5, 0);
		turn = true;
//		transform.eulerAngles.y += -turnSpeed * Time.deltaTime;
	}
	if (Input.GetKey (KeyCode.RightArrow))
	{
		rigidbody.AddTorque(0, 5, 0);
		turn = true;
//		transform.eulerAngles.y += turnSpeed * Time.deltaTime;
	}
	if (turn==false){
		rigidbody.AddTorque(Vector3.up,ForceMode.VelocityChange);
	}
}
