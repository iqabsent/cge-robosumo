#pragma strict

var speed : float = 3;

function Update ()
{
var translationZ : float = Input.GetAxis ("Vertical") * speed;
var translationX : float = Input.GetAxis ("Horizontal") * speed;
translationX *= Time.deltaTime;
translationZ *= Time.deltaTime;
transform.Translate (translationX, 0, translationZ);
}