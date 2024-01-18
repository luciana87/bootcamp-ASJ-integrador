package entity;

public class Country {
	
	private int id;
	private String name;
	
	public Country () {}

	public Country(String name) {
		this.name = name;
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
	
	
}
