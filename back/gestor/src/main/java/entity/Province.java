package entity;

public class Province {
	
	private int id;
	private String name;
	private Country country;
	
	public Province () {}

	public Province(String name, Country country) {
		this.name = name;
		this.country = country;
	}

	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}



}
