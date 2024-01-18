package entity;

public class Contact {
	
	private int id;
	private String contactLastname;
	private String phoneNumber;
	private String email;
	private String position;
	
	public Contact () {}

	public Contact(String contactLastname, String phoneNumber, String email, String position) {
		this.contactLastname = contactLastname;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.position = position;
	}

	public String getContactLastname() {
		return contactLastname;
	}

	public void setContactLastname(String contactLastname) {
		this.contactLastname = contactLastname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getId() {
		return id;
	}
	
	

}
