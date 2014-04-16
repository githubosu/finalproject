class EventsController < ApplicationController

def index
	@events = Event.all
end

def new
	@event = Event.new
end


def create
	@event = Event.new(event_params)
	
	if @event.save
		flash[:notice] = "Successfully created a new event"
		redirect_to events_path
	else 
		flash.now[:error] = "There was a problem"
		render "new"
	end	
end

  def save
    event = Event.new
    event.title = params[:title]
    event.start = params[:start]
    event.end = params[:end]
    event.user = current_user
    event.save
    render text: "someString"
  end



private
def event_params
	params.require(:event).permit(:title, :color, :start, :end, :commit)
end


end
