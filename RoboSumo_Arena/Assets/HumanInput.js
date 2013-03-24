#pragma strict

function Start () {
}

function FixedUpdate () {
	if (Input.GetKey (KeyCode.LeftArrow)){
		this.rigidbody.AddTorque(Vector3.up * 1.1);
	} 
	if (Input.GetKey (KeyCode.RightArrow)){
		this.rigidbody.AddTorque(Vector3.up * -1.1);
	} 
	if (Input.GetKey (KeyCode.UpArrow)){
		this.rigidbody.AddForce(this.transform.forward * 2);
	} 
	if (Input.GetKey (KeyCode.DownArrow)){
		this.rigidbody.AddForce(this.transform.forward * -2);
	} 
}