class EventsController < ApplicationController


	def index
	end

	def new
		@event = Event.new
	end


	def create
		@event = Event.new(params[:event])

		@event.save
		redirect_to @event
	end

	private
		def event_params
			params.require(:article).permit(:title, :text)
		end
end
