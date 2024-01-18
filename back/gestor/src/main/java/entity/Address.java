package entity;

public class Address {

	private int id;
	private String street;
	private String postalCode;
	private String city;
	private Province province;
	
	public Address() {}

	public Address (String street, String postalCode, String city, Province province) {
		this.street = street;
		this.postalCode = postalCode;
		this.city = city;
		this.province = province;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Province getProvince() {
		return province;
	}

	public void setProvince(Province province) {
		this.province = province;
	}

	public int getId() {
		return id;
	}
	
	
}
