FROM scratch
WORKDIR  /app
COPY ./public ./public
CMD ["/app"]